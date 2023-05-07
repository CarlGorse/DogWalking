using Microsoft.AspNetCore.Mvc;

namespace DogWalkingApi.Controllers
{

    public class SystemSettingsController : ControllerBase
    {

        private readonly ISystemSettingsRepository _SystemSettingsRepository;

        public SystemSettingsController(ISystemSettingsRepository systemSettingsRepository)
        {
            _SystemSettingsRepository = systemSettingsRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var systemSettings = _SystemSettingsRepository.Get();
            return Ok(systemSettings);
        }

        [HttpPost]
        public IActionResult Update([FromBody] SystemSettingsDto systemSettingsDto)
        {
            _SystemSettingsRepository.Update(systemSettingsDto);
            return Ok();
        }
    }
}