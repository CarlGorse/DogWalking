using System.ComponentModel.DataAnnotations;

namespace DogWalkingApi.Types
{
    public class Dog
    {
        [Key]
        public int DogId { get; set; }
        public string Name { get; set; } = null!;
        public Breed Breed { get; set; }
        public Size Size { get; set; }
        public CanBeOffLead CanBeOffLead { get; set; }
        public string Comments { get; set; } = null!;
    }
}
