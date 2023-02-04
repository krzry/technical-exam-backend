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
         password: "$2b$10$WbehiHa2OABygVMcRWW3ZeLfoKYAUjxiHu6z6oLN3vAOLZm.fKp4m",
      },
      {
         first_name: "Juan",
         last_name: "Carlos",
         address: "Pembo City",
         post_code: "4200",
         contact_phone_number: "091512590238",
         email: "sampleemail2@gmail.com",
         username: "user2",
         password: "$2b$10$aOxorDZkqJY8z4/mDSTS/eIKnoKkL3xidac4XWEdI7Z5c0TGVDAE6",
      },
   ]);
};
