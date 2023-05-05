using Microsoft.AspNetCore.Mvc;

namespace DogWalkingApi.Controllers
{

    public class BookingsController : ControllerBase
    {

        private readonly IBookingService _BookingService;

        public BookingsController(IBookingService bookingService)
        {
            _BookingService = bookingService;
        }

        [HttpPost]
        public IActionResult CreateBooking([FromBody] CreateBookingDto createBookingDto)
        {
            _BookingService.CreateBooking(createBookingDto);
            return Ok();
        }
    }
}