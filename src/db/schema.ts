import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import {AutoPaginatable, OrganizationMembership, User, WorkOS} from "@workos-inc/node";


export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  year: text('year').notNull().default(sql`CURRENT_TIMESTAMP`),
  age: integer('age').notNull().default(0),
});

export type Job = {
  _id: string;
  title: string;
  description: string;
  orgName?: string;
  remote: string;
  type: string;
  salary: number;
  country: string;
  state: string;
  city: string;
  countryId: string;
  stateId: string;
  cityId: string;
  jobIcon: string;
  contactPhoto: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  orgId: string;
  createdAt: string;
  updatedAt: string;
  isAdmin?: boolean;
};

export const JobsTable = sqliteTable('jobs',{
    id: text('id').primaryKey(),
  title:text('title').notNull(),// {type: String, required: true},
  description:text('description').notNull() ,//{type: String, required: true},
  remote:text('remote').notNull(),  //{type: String, required: true},
  type:text('type').notNull() ,//{type: String, required: true},
  salary: integer('salary').notNull().default(0),//{type: Number, required: true},
  country:text('country').notNull(),// {type: String, required: true},
  state:text('state').notNull(),// {type: String, required: true},
  city:text('city').notNull(),// {type: String, required: true},
  countryId: text('countryId').notNull(),//{type: String, required: true},
  stateId:text('stateId').notNull(),// {type: String, required: true},
  cityId:text('cityId').notNull(),// {type: String, required: true},
  jobIcon: text('jobIcon'),//{type: String},
  contactPhoto:text('contactPhoto'),// {type: String},
  contactName:text('contactName').notNull(),// {type: String, required: true},
  contactPhone:text('contactPhone').notNull(),// {type: String, required: true},
  contactEmail:text('remote').notNull(),// {type: String, required: true},
  orgId:text('remote').notNull(),// {type: String, required: true},
  createdAt: text('createdAt').notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('createdAt').notNull().default(sql`CURRENT_TIMESTAMP`),
});

export type Jobs = typeof JobsTable.$inferSelect;

export async function addOrgAndUserData(jobsDocs:Job[], user:User|null) {
  jobsDocs = JSON.parse(JSON.stringify(jobsDocs));
  //await mongoose.connect(process.env.MONGO_URI as string);
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  let oms:AutoPaginatable<OrganizationMembership>|null = null;
  if (user) {
    oms = await workos.userManagement.listOrganizationMemberships({
      userId: user?.id,
    });
  }
  for (const job of jobsDocs) {
    const org = await workos.organizations.getOrganization(job.orgId);
    job.orgName = org.name;
    if (oms && oms.data.length > 0) {
      job.isAdmin = !!oms.data.find(om => om.organizationId === job.orgId);
    }
  }
  return jobsDocs;
}

export const JobModel =  JobsTable


