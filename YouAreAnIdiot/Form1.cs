using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace YouAreAnIdiot
{
    public partial class Form1 : Form
    {
        Random random = new Random();

        public Form1()
        {
            InitializeComponent();
            webBrowser1.Url = new Uri (Path.GetFullPath("youare.swf"));
            //webBrowser1.WebBrowserShortcutsEnabled = false;
            this.Focus();
            webBrowser1.PreviewKeyDown += new PreviewKeyDownEventHandler(webBrowser1_PreviewKeyDown);
			int width = Screen.PrimaryScreen.WorkingArea.Width;
            int height = Screen.PrimaryScreen.WorkingArea.Height;
			this.Location = new Point(new Random().Next(width), new Random().Next(height));
			this.Load += new EventHandler(timer3_Tick);

        }

       int i = 0;
        private void webBrowser1_PreviewKeyDown(object sender, PreviewKeyDownEventArgs e)
        {
            if (e.KeyCode == Keys.Pause && (e.Alt && e.Control && e.Shift))
            {
                Environment.Exit(0);
            }

        }

        bool up = false;
		bool left = false;
        private void timer1_Tick(object sender, EventArgs e)
        {
            int width = Screen.PrimaryScreen.WorkingArea.Width - 250;
            int height = Screen.PrimaryScreen.WorkingArea.Height - 250;
            int x = this.Location.X;
            int y = this.Location.Y;
			if (Location.X > -1 && Location.X < width && left == false)
			{
				x += 10;
				left = false;
			}
			else
			{
				x -= 10;
				left = Location.X > -1 ? true : false;
			}
			if (Location.Y > -1 && Location.Y < height && up == false)
			{
				y += 10;
				up = false;
			}
			else
			{
				y -= 10;
				up = true;
			}
			if (Location.Y < -1)
			{
				y += 20;
				up = false;
			}
			if (Location.X < -1)
			{
				x += 20;
				left = false;
			}
            this.Left = x;
            this.Top = y;
            this.Width = 306;
            this.Height = 228;

        }

        private void timer2_Tick(object sender, EventArgs e)
        {
			new Form1().Show();
            
        }

        private void timer3_Tick(object sender, EventArgs e)
        {
            int width = Screen.PrimaryScreen.WorkingArea.Width;
            int height = Screen.PrimaryScreen.WorkingArea.Height;
			this.Location = new Point(new Random().Next(width), new Random().Next(height));
        }
    }
}
