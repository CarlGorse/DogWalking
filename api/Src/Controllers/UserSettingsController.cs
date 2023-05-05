using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace DogWalkingApi.Controllers
{

    public class UserSettingsController : ControllerBase
    {

        private readonly IUserSettingsService _UserSettingsService;

        public UserSettingsController(IUserSettingsService userSettingsService)
        {
            _UserSettingsService = userSettingsService;
        }

        [HttpGet]
        public IActionResult Get(string username)
        {

            if (username.IsNullOrEmpty())
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }

            return Ok(_UserSettingsService.Get(username));
        }
    }
}