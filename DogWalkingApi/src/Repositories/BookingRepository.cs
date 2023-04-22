namespace DogWalkingApi.Repositories
{
    public class BookingRepository : IBookingRepository
    {

        private readonly IDogWalkingDbContext _DogWalkingDbContext;

        public BookingRepository(IDogWalkingDbContext dbContext)
        {
            _DogWalkingDbContext = dbContext;
        }

        public void Add(Booking booking)
        {
            _DogWalkingDbContext.Bookings.Add(booking);
        }
    }
}
