using Microsoft.EntityFrameworkCore;

namespace UnitTests
{

    public class TestResources
    {
        public static DogWalkingDbContext CreateDbContext()
        {
            return new DogWalkingDbContext(
                new DbContextOptionsBuilder<DogWalkingDbContext>()
                    .UseInMemoryDatabase(databaseName: "DogWalkingDbContext")
                    .Options);
        }
    }
}
