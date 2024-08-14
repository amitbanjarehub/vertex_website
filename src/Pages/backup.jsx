const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuContent, setMenuContent] = useState([]);
    const [menuContent2, setMenuContent2] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [myCurrentIndex, setMyCurrentIndex] = useState(null);
  
    const handleHover = (event, content, index) => {
      setAnchorEl(event.currentTarget);
      setMenuContent(content?.content);
      setMenuContent2(content?.content2);
      setHoveredIndex(index);
      setMyCurrentIndex(index);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setHoveredIndex(null);
      setMyCurrentIndex(null);
    };
  
    return (
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "150px",
            marginLeft: "150px",
          }}
        >
          <Stack>
            <Typography variant="h4" component="div" color={"black"}>
              Mailmodo
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: {
                lg: "60%",
                xl: "60%",
              },
            }}
          >
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                variant="h6"
                component="div"
                onMouseOver={(e) => handleHover(e, item, index)}
                onMouseLeave={handleClose}
                sx={{
                  mx: 4,
                  cursor: "pointer",
  
                  display: { lg: "flex" },
                  flexDirection: { lg: "row" },
                }}
              >
                <Stack
                  sx={{ color: hoveredIndex === index ? "#4c3bea" : "black" }}
                >
                  {" "}
                  {item.title}{" "}
                </Stack>
                <Stack
                  sx={{
                    marginTop: { lg: "8px" },
                    marginLeft: { lg: "4px" },
                    height: { lg: "16px" },
                    transform: hoveredIndex === index ? "rotate(180deg)" : "none",
                    transformOrigin: "center",
                    color: hoveredIndex === index ? "#4c3bea" : "black",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <IoChevronDown size={16} />
                </Stack>
              </Typography>
            ))}
          </Stack>
  
          {hoveredIndex === myCurrentIndex && (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                onMouseLeave: handleClose,
              }}
              PaperProps={{
                sx: {
                  padding: 2,
                  width: { lg: "50%", xl: "50%" },
                  maxHeight: { lg: "auto", xl: "auto" },
  
                  marginTop: { lg: "24px", xl: "24px" },
                },
              }}
            >
              {/* submenu content */}
            </Menu>
          )}
        </Toolbar>
      </AppBar>
    );
  };