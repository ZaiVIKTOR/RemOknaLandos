import os
 
def get_subdirectories(directory):
    return [name for name in os.listdir(directory) if not(os.path.isdir(os.path.join(directory, name)))]
 
print(get_subdirectories('./img/'))