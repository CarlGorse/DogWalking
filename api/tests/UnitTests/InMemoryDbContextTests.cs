using NUnit;
using NUnit.Framework;

namespace DogWalkingApiTests {

    [TestFixture]
    public class InMemoryDbContextTests {

        [Test]
        public void Instantiate_DoesNotThrow() {
            var dbContext = new InMemoryDbContextTests();
        }
    }
}