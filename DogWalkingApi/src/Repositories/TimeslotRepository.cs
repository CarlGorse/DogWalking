namespace DogWalkingApi.Repositories
{

    public class TimeslotRepository : ITimeslotRepository
    {

        private readonly IDogWalkingDbContext _DbContext;

        public TimeslotRepository(IDogWalkingDbContext dbContext)
        {
            _DbContext = dbContext;
        }

        public IEnumerable<Timeslot> GetByDate(DateOnly date)
        {
            return _DbContext.Timeslots
                .Where(x => x.Date == date);
        }

        public IEnumerable<Timeslot> GetByIds(IReadOnlyCollection<int> timeslotIds)
        {
            return _DbContext.Timeslots
                .Where(x => timeslotIds.Contains(x.TimeslotId));
        }

        public void BookTimeslots(IReadOnlyCollection<int> timeslotIds, Booking booking)
        {
            var timeslots = _DbContext.Timeslots
                .Where(x => timeslotIds.Contains(x.TimeslotId));

            foreach (var timeslot in timeslots)
            {
                timeslot.Status = TimeslotStatus.NotBookable;
                timeslot.Booking = booking;
            }

        }
    }
}
