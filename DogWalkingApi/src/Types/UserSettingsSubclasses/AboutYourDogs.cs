using System.ComponentModel.DataAnnotations;

namespace DogWalkingApi.Types.UserSettingsSubclasses
{
    public class AboutYourDogs
    {
        [Key]
        public int AboutYourDogsId { get; set; }
        public IReadOnlyCollection<Dog> Dogs = null!;
    }
}
