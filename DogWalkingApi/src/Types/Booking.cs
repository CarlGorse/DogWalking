using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(BookingId))]
    public class Booking
    {
        [JsonProperty("id")]
        public int BookingId { get; set; }

        [JsonProperty("timeslotIds")]
        public IEnumerable<int> TimeslotIds { get { return Timeslots.Select(x => x.TimeslotId); } }

        [NotMapped]
        [JsonIgnore]
        public ICollection<Timeslot> Timeslots { get; set; } = null!;

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
