import APIBase from './base.api';

class APIHabit extends APIBase {
  tableName: string = "habits";
}

export default new APIHabit;