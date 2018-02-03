<template>
  <div class="calendar:day-picker flex-1 flex flex-col justify-center">

    <!-- Dias da semana -->
    <o-calendar-weekday-header></o-calendar-weekday-header>

    <!-- Dias do mês :: Semana -->
    <div class="calendar:week flex text-grey font-bold"
         v-for="(week, weekId) in calendar"
         :key="`calendar-days-week-${weekId}`">
      
      <!-- Dias do mês :: Dia -->
      <o-calendar-day v-for="day in week" :key="`calendar-day-${day.code}`" :day="day"></o-calendar-day>
    </div>
    
  </div>
</template>

<script>
  import oCalendarDay from './Calendar-day.vue';
  import oCalendarWeekdayHeader from './Calendar-weekday-header.vue';

  export default {
    components: {oCalendarDay, oCalendarWeekdayHeader},
    computed: {

      year() {
        return this.$store.state.calendar.year;
      },

      month() {
        return this.$store.state.calendar.month;
      },

      calendar() {
        // Pegar dados sobre o mês
        let month = this.getMonthData(this.year, this.month);
        // Montar array da primeira semana (com dias do mês passado no começo)
        let firstWeek = this.makeFirstWeek(month.weekday, month.lastTotal);
        // Montar arrays das demais semanas (com dias do mês seguite no final)
        let weeks = this.makeWeeks(firstWeek[firstWeek.length-1].number+1, month.total);
        // Adicionar a primeira semana no início da array
        weeks.unshift(firstWeek);

        return weeks;
      },
    },
    methods: {

      makeWeeks(startDay, total) {
        let week = [],
            weeks = [],
            day = startDay;
            
        while(day <= total) {
          if(week.length === 7) {
            weeks.push(week);
            week = [];
          }

          week.push( this.dayObject(this.year, this.month, day, true) );
          day++;
        }
        
        // Completar última semana
        week = this.fillWeek(week);
        weeks.push(week);
        // Completar array de semanas para ter 5 semanas
        while(weeks.length < 5) {
          week = this.fillWeek([], week[week.length-1].number+1);
          weeks.push(week);
        }

        return weeks;
      },

      fillWeek(week, day) {
        day = (!day || day >= 31) ? 1 : day;
        while(week.length < 7) {
          week.push(this.dayObject(
            this.month < 11 ? this.year : this.year+1,
            this.month < 11 ? this.month+1 : 0,
            day,
            false
          ));
          day++;
        }

        return week;
      },

      makeFirstWeek(startWeekday, lastTotal) {
        // Enche a primeira semana com dias do mês anterior
        let week = this.fillFirstWeek([], startWeekday, lastTotal);

        // Dias do mês atual
        let day = 1;
        while(week.length < 7) {
          week.push( this.dayObject(this.year, this.month, day, true) );
          day++;
        }

        return week;
      },

      fillFirstWeek(week, startWeekday, lastTotal) {
        let firstWeekSunday = lastTotal-startWeekday+1;
        for(let i=firstWeekSunday; i <= lastTotal; i++) {
          week.push(this.dayObject(
            this.month > 0 ? this.year : this.year-1,
            this.month > 0 ? this.month-1 : 11,
            i,
            false
          ));
        }

        return week;
      },

      dayObject(year, month, number, currentMonth) {
        return {
          number, month, year, currentMonth,
          code: `${year}${month}${number}`
        };
      },

      getMonthData(year, month) {
        let date = new Date(year, month, 1);

        return {
          // Ano, mês e dia (dia primeiro)
          year, month, day: 1,
          // Dia da semana do primeiro dia do mês
          weekday: date.getDay(),
          // Número total de dias do mês atual
          total: new Date(year, month +1, 0).getDate(),
          // Número total de dias do mês anterior
          lastTotal: new Date(year, month, 0).getDate()
        };
      }
    }
  }
</script>
