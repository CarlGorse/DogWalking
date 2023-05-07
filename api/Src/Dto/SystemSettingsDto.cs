using Newtonsoft.Json;

namespace DogWalkingApi.Dto
{
    public class SystemSettingsDto
    {
        [JsonProperty("status")]
        public SystemStatus Status { get; set; }
    }
}
