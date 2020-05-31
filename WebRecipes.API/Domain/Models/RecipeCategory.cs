using System.ComponentModel.DataAnnotations;

namespace WebRecipes.API.Domain.Models
{
    public class RecipeCategory
    {
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}