using Microsoft.AspNetCore.Mvc;

namespace DogWalkingApi.Controllers
{

    public class TimeslotsController : ControllerBase
    {

        private readonly ITimeslotService _TimeslotService;

        public TimeslotsController(ITimeslotService timeslotService)
        {
            _TimeslotService = timeslotService;
        }

        public IActionResult Get(DateTime date)
        {

            if (date == DateTime.MinValue)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }

            return Ok(_TimeslotService.Get(DateOnly.FromDateTime(date)));
        }
    }
}