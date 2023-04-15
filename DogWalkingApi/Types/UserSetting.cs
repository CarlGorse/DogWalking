using DogWalkingApi.Types.UserSettings;
using System.ComponentModel.DataAnnotations;

namespace DogWalkingApi.Types
{
    public class UserSetting
    {
        [Key]
        public int UserSettingId { get; set; }
        public SelectService SelectService { get; set; } = null!;
        public AboutYou AboutYou { get; set; } = null!;
        public AboutYourDogs AboutYourDogs { get; set; } = null!;
        public Options Options { get; set; } = null!;

    }
}
