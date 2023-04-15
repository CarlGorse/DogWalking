using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.DbContext {

    public class TestDogWalkingDbContext : DogWalkingDbContext, IDogWalkingDbContext {

        public TestDogWalkingDbContext(DbContextOptions options) : base(options, prePopulate: false) {

        }
    }
}
