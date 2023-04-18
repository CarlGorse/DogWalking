using DogWalkingApi.Types.UserSettingsSubclasses;
using System.ComponentModel.DataAnnotations;

namespace DogWalkingApi.Types
{
    public class UserSettings
    {
        [Key]
        public int UserSettingId { get; set; }
        public string Username { get; set; } = null!;
        public SelectService SelectService { get; set; } = null!;
        public AboutYou AboutYou { get; set; } = null!;
        public AboutYourDogs AboutYourDogs { get; set; } = null!;
        public Options Options { get; set; } = null!;

    }
}
