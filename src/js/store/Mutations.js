export default {
  /**
   * setStatus
   * ---
   * Modifica o status do App.
   * @param {Object}    state    State do App
   * @param {String}    status   Novo status
   */
  setStatus(state, status) {
    state.status = status;
  }
}