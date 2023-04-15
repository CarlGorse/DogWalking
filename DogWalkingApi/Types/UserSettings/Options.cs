using System.ComponentModel.DataAnnotations;

namespace DogWalkingApi.Types.UserSettings
{
    public class Options
    {
        [Key]
        public int OptionsId { get; set; }
        public bool CanOtherDogJoin { get; set; }
    }
}
