namespace DogWalkingApi.Services
{
    public class BookingService : IBookingService
    {

        private readonly ITimeslotService _TimeslotService;
        private readonly IUnitOfWork _UnitOfWork;

        public BookingService(IUnitOfWork unitOfWork, ITimeslotService timeslotService)
        {
            _UnitOfWork = unitOfWork;
            _TimeslotService = timeslotService;
        }

        public void CreateBooking(CreateBookingDto createBookingDto)
        {
            var booking = new Booking
            {
                Location = createBookingDto.Location,
            };

            _UnitOfWork.BookingRepository.Add(booking);

            _TimeslotService.BookTimeslots(booking, createBookingDto.Date, createBookingDto.TimeslotTimes);

            _UnitOfWork.SaveChanges();
        }
    }
}
