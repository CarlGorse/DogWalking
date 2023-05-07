using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(SystemSettingsId))]
    public class SystemSettings
    {

        [JsonProperty("id")]
        public int SystemSettingsId { get; set; }

        [JsonProperty("value")]
        public string Value { get; set; } = null!;

    }
}
