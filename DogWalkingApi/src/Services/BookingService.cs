namespace DogWalkingApi.Services
{
    public class BookingService : IBookingService
    {

        private readonly IUnitOfWork _UnitOfWork;

        public BookingService(IUnitOfWork unitOfWork)
        {
            _UnitOfWork = unitOfWork;
        }

        public void CreateBooking(CreateBookingDto createBookingDto)
        {
            var booking = new Booking
            {
                Location = createBookingDto.Location,
                Timeslots = _UnitOfWork.TimeslotRepository.GetByIds(createBookingDto.TimeslotIds).ToList()
            };

            _UnitOfWork.BookingRepository.Add(booking);

            _UnitOfWork.TimeslotRepository.BookTimeslots(createBookingDto.TimeslotIds, booking);

            _UnitOfWork.SaveChanges();
        }
    }
}
