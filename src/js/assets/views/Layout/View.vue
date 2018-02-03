<script>
  import {config} from '../../../config';
  export default {
    mounter() {
      this.$store.dispatch('setStatus', 'ready');
    }
  }
</script>
