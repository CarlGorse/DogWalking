namespace DogWalkingApi.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {

        private readonly IDogWalkingDbContext _DbContext;
        public ITimeslotRepository TimeslotRepository { get; }
        public IBookingRepository BookingRepository { get; }

        public UnitOfWork(
            IDogWalkingDbContext dbContext,
            ITimeslotRepository timeslotRepository,
            IBookingRepository bookingRepository)
        {
            _DbContext = dbContext;
            TimeslotRepository = timeslotRepository;
            BookingRepository = bookingRepository;
        }

        public int SaveChanges()
        {
            return _DbContext.SaveChanges();
        }
    }
}
