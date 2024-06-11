/*
import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
    const supabase = createClient();
    const { data: notes } = await supabase.from("notes").select();

    // Assuming you have a JSON string from an API response
    const jsonString = JSON.stringify(notes);
    // Parse the JSON string into a JavaScript object
    const datas = JSON.parse(jsonString);
    console.log(datas);

    // return <pre>{JSON.stringify(notes, null, 4)}</pre>

    return (
        <div>
            {datas.map((data: any) => (
                <div key={data.id}>
                    <p>Title: {data.title}</p>
                    <p>Content: {data.content}</p>
                </div>
            ))}
        </div>
    )
}
*/

import React from 'react';
import { createClient } from '~/app/utils/supabase/server';

const supabase = createClient();
const { data: notes } = await supabase.from("notes").select();

// Assuming you have a JSON string from an API response
const jsonString = JSON.stringify(notes);
// Parse the JSON string into a JavaScript object
const members = JSON.parse(jsonString);

// const members = [
//   { id: 4, name: 'Irene', group: 'Red Velvet' },
//   { id: 2, name: 'Natty', group: 'Kiss of Life' },
//   { id: 3, name: 'Momo', group: 'Twice' },
//   { id: 1, name: 'Karina', group: 'Aespa' },
// ];

const MemberList = () => {
  return (
    <div className='blue-800'>
      {members.map((member) => (
        <div>
          <h1 key={member.id}>{member.name}</h1>
          <h3 key={member.id}>{member.group}</h3>
        </div>
      ))}
    </div>
  );
};

export default MemberList;
