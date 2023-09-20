import tree_2_x1_bin from './tree-2-x1.bin?url';
import environment_col_jpg from './environment_col.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "Tree2.002",
			"scale": [
				1.0661050081253052,
				0.8433658480644226,
				1.0661050081253052
			],
			"translation": [
				60.728607177734375,
				23.558862686157227,
				3.813856363296509
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0,
						0,
						0
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Folliages",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cylinder.032",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "environment_col",
			"uri": environment_col_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 416,
			"max": [
				0.5206745862960815,
				5.382261276245117,
				0.7076966762542725
			],
			"min": [
				-0.643889844417572,
				-5.566389560699463,
				-1.0674054622650146
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 416,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 416,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 630,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3453,
			"byteOffset": 0
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 3456,
			"uri": tree_2_x1_bin
		}
	]
}