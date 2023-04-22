using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(TimeslotId))]
    public class Timeslot
    {
        [JsonProperty("id")]
        public int TimeslotId { get; }

        [JsonProperty("date")]
        public DateOnly Date { get; set; }

        [JsonProperty("startTime")]
        public TimeOnly StartTime { get; set; }

        [JsonProperty("endTime")]
        public TimeOnly EndTime { get; set; }

        [JsonProperty("status")]
        [JsonConverter(typeof(StringEnumConverter), typeof(CamelCaseNamingStrategy))]
        public TimeslotStatus Status;

        [JsonProperty("booking")]
        public Booking? Booking { get; set; }

        [JsonProperty("duration")]
        public int DurationMins
        {
            get
            {
                return (EndTime - StartTime).Minutes;
            }
        }

        [JsonProperty("hasBooking")]
        public bool HasBooking { get { return Booking != null; } }
    }
}
