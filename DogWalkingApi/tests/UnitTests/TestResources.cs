using Microsoft.EntityFrameworkCore;

namespace UnitTests
{

    internal class TestResources
    {
        public static TestDogWalkingDbContext CreateTestDbContext()
        {

            var optionsBuilder = new DbContextOptionsBuilder<DogWalkingDbContext>()
                .UseInMemoryDatabase("DogWalking");

            return new TestDogWalkingDbContext(optionsBuilder.Options);
        }
    }
}
