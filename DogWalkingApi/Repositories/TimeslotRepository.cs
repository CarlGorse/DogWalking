using DogWalkingApi.DbContext;
using System.Security.Cryptography.X509Certificates;

namespace DogWalkingApi.Repositories {

    public class TimeslotRepository : ITimeslotRepository {

        private readonly DogWalkingDbContext _DbContext;

        public TimeslotRepository(DogWalkingDbContext dbContext) {
            _DbContext = dbContext;
        }

        public IQueryable<Timeslot> Get() {
            return _DbContext.Timeslots;
        }
    }
}
