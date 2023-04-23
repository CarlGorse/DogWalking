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

        public IActionResult Get()
        {
            var date = DateTime.Now;

            if (date == DateTime.MinValue)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }

            var data = _TimeslotService.Get(DateOnly.FromDateTime(date)).ToList();

            return Ok(data);
        }
    }
}