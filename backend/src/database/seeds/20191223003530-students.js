module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'João Silva',
          email: 'joao@student.com',
          age: 33,
          weight: 90,
          height: 1.77,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maria Silva',
          email: 'maria@student.com',
          age: 31,
          weight: 78,
          height: 1.66,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Patrícia Silva',
          email: 'patrícia@student.com',
          age: 26,
          weight: 69,
          height: 1.69,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'José Silva',
          email: 'jose@student.com',
          age: 40,
          weight: 88,
          height: 1.8,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('students', null, {});
  },
};
