import db from './dbconn';

export default abstract class APIBase {
  tableName: string = "";

  async create(label: string) {
    return await db(this.tableName)
      .insert({label});
  }

  async delete(id: number) {
    return await db(this.tableName)
      .where('id', id)
      .delete();
  }

  async get(clause: Record<string, string|number>) {
    return await db(this.tableName)
      .where(clause)
      .select();
  }
}