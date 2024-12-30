// app/api/submitRequest/route.js

// import { createClient } from '@supabase/supabase-js';

// // Используйте только серверные переменные
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export async function POST(req) {
//   const { description } = await req.json();

//   if (!description) {
//     return new Response(JSON.stringify({ error: 'Description is required' }), { status: 400 });
//   }

//   const { data, error } = await supabase.from('requests').insert([{ description }]);

//   if (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }

//   return new Response(JSON.stringify({ message: 'Request submitted successfully', data }), {
//     status: 200,
//   });
// }
// app/api/submitRequest/route.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  const { description } = await req.json();
  console.log(req, 'req');

  if (!description) {
    return new Response(JSON.stringify({ error: 'Description is required' }), { status: 400 });
  }

  // Вставляем данные в таблицу "requests"
  const { data, error } = await supabase
    .from('requests')
    .insert([{ description }]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: 'Request submitted successfully', data }), {
    status: 200,
  });
}

