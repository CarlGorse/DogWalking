using DogWalkingApi.Repositories;
using DogWalkingApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace DogWalkingApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class TimeslotsController : ControllerBase
    {

        private readonly ITimeslotRepository _TimeslotRepository;
        private readonly ITimeslotService _TimeslotService;

        public TimeslotsController(ITimeslotService timeslotService, ITimeslotRepository timeslotRepository)
        {
            _TimeslotService = timeslotService;
            _TimeslotRepository = timeslotRepository;
        }

        [HttpGet(Name = "Get")]
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