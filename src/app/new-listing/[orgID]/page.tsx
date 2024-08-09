import React from 'react'
import { db } from '@/db'
import { JobsTable, users } from '@/db/schema'

export default async function OrgDetails() {
    const data = await db.select().from(users)
    const data1 = await db.select().from(JobsTable)
    const jsondata = JSON.stringify(data1)
    console.log(data)
    return (
        <section>
            <p>   count= {jsondata}
            </p>
        </section>
    )
}
