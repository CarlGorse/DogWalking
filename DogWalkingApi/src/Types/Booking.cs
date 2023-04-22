using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using System.ComponentModel.DataAnnotations.Schema;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(BookingId))]
    public class Booking
    {
        [JsonProperty("id")]
        public int BookingId { get; set; }

        [NotMapped]
        [JsonIgnore]
        public ICollection<Timeslot> Timeslots { get; set; } = null!;

        [JsonProperty("location")]
        [JsonConverter(typeof(StringEnumConverter), typeof(CamelCaseNamingStrategy))]
        public Locations Location { get; set; }

        [JsonProperty("date")]
        public DateOnly Date { get { return GetEarliestTimeslot().Date; } }

        [JsonProperty("startTime")]
        public TimeOnly StartTime { get { return GetEarliestTimeslot().StartTime; } }

        [JsonProperty("endTime")]
        public TimeOnly EndTime { get { return GetLatestTimeslot().EndTime; } }

        private Timeslot GetEarliestTimeslot()
        {
            return Timeslots.OrderBy(x => x.Date).ThenBy(x => x.StartTime).FirstOrDefault();
        }

        private Timeslot GetLatestTimeslot()
        {
            return Timeslots.OrderBy(x => x.Date).ThenBy(x => x.StartTime).LastOrDefault();
        }
    }
}
