import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex.raw(`
      CREATE SEQUENCE public.habits_habits_id_seq
      INCREMENT 1
      START 1
      MINVALUE 1
      MAXVALUE 2147483647
      CACHE 1;

      ALTER SEQUENCE public.habits_habits_id_seq
          OWNER TO habbit_user;
          CREATE TABLE IF NOT EXISTS public.habits
          (
              habits_id integer NOT NULL DEFAULT nextval('habits_habits_id_seq'::regclass),
              label text COLLATE pg_catalog."default" NOT NULL,
              user_fk integer NOT NULL,
              CONSTRAINT habits_pkey PRIMARY KEY (habits_id)
          )
          
          TABLESPACE pg_default;
    `);
    await knex('habits').insert({label: 'Eating greens', user_fk: 1});
    await knex('habits').insert({label: 'Running', user_fk: 1});
    await knex('habits').insert({label: 'Sleeping 8 hours', user_fk: 2});
    await knex('habits').insert({label: 'No alcohol today', user_fk: 1});
};
