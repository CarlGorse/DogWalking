﻿using System.ComponentModel.DataAnnotations;

namespace DogWalkingApi.Types.UserSettingsSubclasses
{
    public class AboutYou
    {
        [Key]
        public int AboutYouId { get; set; }
        public string Name = null!;
        public string PostCode = null!;
        public string LocationDetails = null!;
    }
}
