using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aspnet_vue.Models;
using Microsoft.AspNetCore.Mvc;

namespace aspnet_vue.Controllers
{
    public class HomeController : Controller
    {
        BloggingContext db = new BloggingContext();

        public IActionResult Index()
        {
            return View();
        }

        public string Add()
        {
            db.Blogs.Add(new Blog() {
                Url = "http://google.com.vn"
            });
            db.SaveChanges();

            return "Added";
        }

        public IActionResult Show()
        {
            var list = db.Blogs;
        
            return Json(list);
        }
    }
}
