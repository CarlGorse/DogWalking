using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.Repositories
{

    public class TimeslotRepository : ITimeslotRepository
    {

        private readonly IDogWalkingDbContext _DbContext;

        public TimeslotRepository(IDogWalkingDbContext dbContext)
        {
            _DbContext = dbContext;
        }

        public IQueryable<Timeslot> Timeslots() => _DbContext.Timeslots.Include(x => x.BookingTimeslots);

        public IEnumerable<Timeslot> GetByDate(DateOnly date)
        {
            return Timeslots()
                .Where(x => x.Date == date);
        }

        public IEnumerable<Timeslot> GetByIds(IReadOnlyCollection<int> timeslotIds)
        {
            return Timeslots()
                .Where(x => timeslotIds.Contains(x.TimeslotId));
        }
    }
}
