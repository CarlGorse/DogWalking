using System.ComponentModel.DataAnnotations;

namespace DogWalkingApi.Types.UserSettingsSubclasses
{
    public class Options
    {
        [Key]
        public int OptionsId { get; set; }
        public bool CanOtherDogJoin { get; set; }
    }
}
