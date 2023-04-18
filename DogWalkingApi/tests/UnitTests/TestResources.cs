using DogWalkingApi.DbContext;
using Microsoft.EntityFrameworkCore;

namespace DogWalkingApiTests {

    internal class TestResources {
        public static IDogWalkingDbContext CreateDbContext() {

            var optionsBuilder = new DbContextOptionsBuilder<DogWalkingDbContext>()
                .UseInMemoryDatabase("DogWalking");

            return new TestDogWalkingDbContext(optionsBuilder.Options);
        }
    }
}
