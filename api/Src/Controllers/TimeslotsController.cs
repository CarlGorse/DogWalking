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

        [HttpGet]
        public IActionResult Get([FromQuery] DateTime date)
        {
            var data = _TimeslotService.Get(DateOnly.FromDateTime(date)).ToList();
            return Ok(data);
        }
    }
}