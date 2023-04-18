namespace DogWalkingApi.Repositories {

    public class TimeslotRepository : ITimeslotRepository {

        private readonly IDogWalkingDbContext _DbContext;

        public TimeslotRepository(IDogWalkingDbContext dbContext) {
            _DbContext = dbContext;
        }

        public IQueryable<Timeslot> Get() {
            return _DbContext.Timeslots;
        }
    }
}
