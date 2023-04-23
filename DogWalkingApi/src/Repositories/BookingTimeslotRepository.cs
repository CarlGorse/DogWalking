namespace DogWalkingApi.Repositories
{
    public class BookingTimeslotRepository : IBookingTimeslotRepository
    {

        private readonly IDogWalkingDbContext _DogWalkingDbContext;

        public BookingTimeslotRepository(IDogWalkingDbContext dbContext)
        {
            _DogWalkingDbContext = dbContext;
        }

        public void Add(BookingTimeslot bookingTimeslot)
        {
            _DogWalkingDbContext.BookingTimeslots.Add(bookingTimeslot);
        }

        public void Add(int bookingId, int timeslotId)
        {
            Add(new BookingTimeslot { BookingId = bookingId, TimeslotId = timeslotId });
        }
    }
}
