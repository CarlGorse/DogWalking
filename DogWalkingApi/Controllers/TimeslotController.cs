using DogWalkingApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace DogWalkingApi.Controllers {
    
    [ApiController]
    [Route("[controller]")]
    public class TimeslotController : ControllerBase {

        private ITimeslotService _TimeslotService;

        public TimeslotController(ITimeslotService timeslotService) {
            _TimeslotService = timeslotService;
        }

        [HttpGet(Name = "Get")]
        public IReadOnlyCollection<Timeslot> Get(DateOnly date) {
            return _TimeslotService.Get(date);
        }
    }
}