var searchIndex = JSON.parse('{\
"cc":{"doc":"A library for build scripts to compile custom C code","t":[3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,13,13,13,13,13,4,11,11,11,11,11,5,5,5,11,11,11,11,11,11,11],"n":["Build","Error","Tool","ar_flag","archiver","args","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","cargo_metadata","cc_env","cflags_env","clone","clone","clone","clone_into","clone_into","clone_into","compile","compiler","cpp","cpp_link_stdlib","cpp_set_stdlib","cuda","cudart","debug","default","define","env","expand","extra_warnings","file","files","flag","flag_if_supported","fmt","fmt","fmt","fmt","force_frame_pointer","from","from","from","from","get_compiler","host","include","includes","into","into","into","is_flag_supported","is_like_clang","is_like_gnu","is_like_msvc","new","no_default_flags","object","opt_level","opt_level_str","out_dir","path","pic","shared_flag","static_crt","static_flag","target","to_command","to_owned","to_owned","to_owned","to_string","try_compile","try_expand","try_from","try_from","try_from","try_get_compiler","try_into","try_into","try_into","type_id","type_id","type_id","use_plt","warnings","warnings_into_errors","windows_registry","Vs12","Vs14","Vs15","Vs16","Vs17","VsVers","borrow","borrow_mut","clone","clone_into","eq","find","find_tool","find_vs_version","fmt","from","into","to_owned","try_from","try_into","type_id"],"q":["cc","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","cc::windows_registry","","","","","","","","","","","","","","","","","","","",""],"d":["A builder for compilation of a native library.","Represents an internal error that occurred, with an …","Configuration used to represent an invocation of a C …","Add a flag to the invocation of the ar","Configures the tool used to assemble archives.","Returns the default set of arguments to the compiler …","","","","","","","Define whether metadata should be emitted for cargo …","Returns the compiler command in format of CC environment …","Returns the compiler flags in format of CFLAGS environment …","","","","","","","Run the compiler, generating the file <code>output</code>","Configures the compiler to be used to produce output.","Set C++ support.","Set the standard library to link against when compiling …","Force the C++ compiler to use the specified standard …","Set CUDA C++ support.","Link CUDA run-time.","Configures whether the compiler will emit debug …","","Specify a <code>-D</code> variable with an optional value.","Returns the set of environment variables needed for this …","Run the compiler, returning the macro-expanded version of …","Set extra warnings flags.","Add a file which will be compiled","Add files which will be compiled","Add an arbitrary flag to the invocation of the compiler","Add an arbitrary flag to the invocation of the compiler if …","","","","","Configures whether the compiler will emit instructions to …","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Get the compiler that’s in use for this configuration.","Configures the host assumed by this configuration.","Add a directory to the <code>-I</code> or include path for headers","Add multiple directories to the <code>-I</code> include path.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Run the compiler to test if it accepts the given flag.","Whether the tool is Clang-like.","Whether the tool is GNU Compiler Collection-like.","Whether the tool is MSVC-like.","Construct a new instance of a blank set of configuration.","Disables the generation of default compiler flags. The …","Add an arbitrary object file to link in","Configures the optimization level of the generated object …","Configures the optimization level of the generated object …","Configures the output directory where all object files and …","Returns the path for this compiler.","Configures whether the compiler will emit position …","Set the <code>-shared</code> flag.","Configures whether the /MT flag or the /MD flag will be …","Set the <code>-static</code> flag.","Configures the target this configuration will be compiling …","Converts this compiler into a <code>Command</code> that’s ready to be …","","","","","Run the compiler, generating the file <code>output</code>","This will return a result instead of panicing; see …","","","","Get the compiler that’s in use for this configuration.","","","","","","","Configures whether the Procedure Linkage Table is used for …","Set warnings flags.","Set warnings into errors flag.","A helper module to probe the Windows Registry when looking …","Visual Studio 12 (2013)","Visual Studio 14 (2015)","Visual Studio 15 (2017)","Visual Studio 16 (2019)","Visual Studio 17 (2022)","A version of Visual Studio","","","","","","Attempts to find a tool within an MSVC installation using …","Similar to the <code>find</code> function above, this function will …","Find the most recent installed version of Visual Studio","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","",""],"i":[0,0,0,1,1,2,1,3,2,1,3,2,1,2,2,1,3,2,1,3,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,3,3,2,1,1,3,3,2,1,1,1,1,1,3,2,1,2,2,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,3,2,3,1,1,1,3,2,1,1,3,2,1,3,2,1,1,1,0,4,4,4,4,4,0,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4],"f":[null,null,null,[[["",0],["str",0]],["build",3]],[[["",0],["asref",8,[["path",3]]]],["build",3]],[[["",0]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0],["bool",0]],["build",3]],[[["",0]],["osstring",3]],[[["",0]],["osstring",3]],[[["",0]],["build",3]],[[["",0]],["error",3]],[[["",0]],["tool",3]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0],["str",0]]],[[["",0],["asref",8,[["path",3]]]],["build",3]],[[["",0],["bool",0]],["build",3]],[[["",0],["into",8,[["option",4,[["str",0]]]]]],["build",3]],[[["",0],["into",8,[["option",4,[["str",0]]]]]],["build",3]],[[["",0],["bool",0]],["build",3]],[[["",0],["str",0]],["build",3]],[[["",0],["bool",0]],["build",3]],[[],["build",3]],[[["",0],["str",0],["into",8,[["option",4,[["str",0]]]]]],["build",3]],[[["",0]]],[[["",0]],["vec",3,[["u8",0]]]],[[["",0],["bool",0]],["build",3]],[[["",0],["asref",8,[["path",3]]]],["build",3]],[[["",0]],["build",3]],[[["",0],["str",0]],["build",3]],[[["",0],["str",0]],["build",3]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["bool",0]],["build",3]],[[]],[[["error",3]],["error",3]],[[]],[[]],[[["",0]],["tool",3]],[[["",0],["str",0]],["build",3]],[[["",0],["asref",8,[["path",3]]]],["build",3]],[[["",0]],["build",3]],[[]],[[]],[[]],[[["",0],["str",0]],["result",4,[["bool",0],["error",3]]]],[[["",0]],["bool",0]],[[["",0]],["bool",0]],[[["",0]],["bool",0]],[[],["build",3]],[[["",0],["bool",0]],["build",3]],[[["",0],["asref",8,[["path",3]]]],["build",3]],[[["",0],["u32",0]],["build",3]],[[["",0],["str",0]],["build",3]],[[["",0],["asref",8,[["path",3]]]],["build",3]],[[["",0]],["path",3]],[[["",0],["bool",0]],["build",3]],[[["",0],["bool",0]],["build",3]],[[["",0],["bool",0]],["build",3]],[[["",0],["bool",0]],["build",3]],[[["",0],["str",0]],["build",3]],[[["",0]],["command",3]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]],["string",3]],[[["",0],["str",0]],["result",4,[["error",3]]]],[[["",0]],["result",4,[["vec",3,[["u8",0]]],["error",3]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["result",4,[["tool",3],["error",3]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0],["bool",0]],["build",3]],[[["",0],["bool",0]],["build",3]],[[["",0],["bool",0]],["build",3]],null,null,null,null,null,null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["vsvers",4]],[[["",0],["",0]]],[[["",0],["vsvers",4]],["bool",0]],[[["str",0],["str",0]],["option",4,[["command",3]]]],[[["str",0],["str",0]],["option",4,[["tool",3]]]],[[],["result",4,[["vsvers",4],["string",3]]]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[["",0]]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]]],"p":[[3,"Build"],[3,"Tool"],[3,"Error"],[4,"VsVers"]]},\
"gcc_shim":{"doc":"","t":[5],"n":["main"],"q":["gcc_shim"],"d":[""],"i":[0],"f":[[[]]],"p":[]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};