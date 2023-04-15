using DogWalkingApi.Repositories;
using DogWalkingApi.Services;
using DogWalkingApi.Types;
using Microsoft.AspNetCore.Mvc;

namespace DogWalkingApi.Controllers {

    [ApiController]
    [Route("[controller]")]
    public class TimeslotsController : ControllerBase {

        private readonly ITimeslotRepository _TimeslotRepository;
        private readonly ITimeslotService _TimeslotService;

        public TimeslotsController(ITimeslotService timeslotService, ITimeslotRepository timeslotRepository) {
            _TimeslotService = timeslotService;
            _TimeslotRepository = timeslotRepository;
        }

        /*
        [HttpGet(Name = "Get")]
        public IReadOnlyCollection<Timeslot> Get(DateOnly date) {
            return _TimeslotService.Get(date);
        }
        */

        [HttpGet(Name = "Get")]
        public IReadOnlyCollection<Timeslot> Get() {
            return _TimeslotRepository.Get().ToList().AsReadOnly();
        }
    }
}