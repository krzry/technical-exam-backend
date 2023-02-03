/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
   // Deletes ALL existing entries
   await knex("users").del();
   await knex("users").insert([
      {
         first_name: "Christian",
         last_name: "Frecia",
         address: "Bacolod City",
         post_code: "4500",
         contact_phone_number: "091512345124",
         email: "sampleemail1@gmail.com",
         username: "user1",
         password: "21232f297a57a5a743894a0e4a801fc3",
      },
      {
         first_name: "Juan",
         last_name: "Carlos",
         address: "Pembo City",
         post_code: "4200",
         contact_phone_number: "091512590238",
         email: "sampleemail2@gmail.com",
         username: "user2",
         password: "21232f297a57a5a743894a0e4a801fc3",
      },
   ]);
};
